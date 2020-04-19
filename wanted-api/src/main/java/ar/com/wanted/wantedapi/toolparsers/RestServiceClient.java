package ar.com.wanted.wantedapi.toolparsers;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.URL;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public class RestServiceClient<T, U> {

	private String serviceURL;
	private String proxyUrl;
	private int proxyPort;
	private Map<String, String> mapRequestProperties;
	private static final String REQUEST_METHOD_POST = "POST";
	private static final String CONTENT_TYPE = "Content-Type";
	private static final String CONTENT_JSON = "application/json";
	private String requestPlainText;
	private String responsePlainText;

	public RestServiceClient(String serviceURL, String proxyUrl, int proxyPort,
			Map<String, String> mapRequestProperties) {
		this.serviceURL = serviceURL;
		this.proxyUrl = proxyUrl;
		this.proxyPort = proxyPort;
		this.mapRequestProperties = mapRequestProperties;
	}

	public RestServiceClient(String serviceURL) {
		this.serviceURL = serviceURL;
	}

	public U callJsonServicePost(T t, Class<U> uclazz) throws Exception {
		return callService(t, uclazz, REQUEST_METHOD_POST, CONTENT_JSON, true);
	}

	public U callJsonServicePost(T t, Class<U> uclazz, boolean wrapRootValue) throws Exception {
		return callService(t, uclazz, REQUEST_METHOD_POST, CONTENT_JSON, wrapRootValue);
	}

	public U callService(T t, Class<U> uclazz, String requestMethod, String contentType, boolean wrapRootValue)
			throws Exception {
		U u = null;
		ObjectMapper mapper = new ObjectMapper();
		if (wrapRootValue) {
			mapper.enable(SerializationFeature.WRAP_ROOT_VALUE);
		} else {
			mapper.disable(SerializationFeature.WRAP_ROOT_VALUE);
		}

		requestPlainText = mapper.writeValueAsString(t);

		URL url = new URL(serviceURL);
		HttpURLConnection conn = null;
		if (proxyUrl != null && !"".equalsIgnoreCase(proxyUrl.trim())) {
			Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(proxyUrl, proxyPort));
			conn = (HttpURLConnection) url.openConnection(proxy);
		} else {
			conn = (HttpURLConnection) url.openConnection();
		}
		conn.setDoOutput(true);
		conn.setRequestMethod(requestMethod);
		conn.setRequestProperty(CONTENT_TYPE, contentType);
		if (mapRequestProperties != null && mapRequestProperties.size() > 0) {
			for (String property : mapRequestProperties.keySet()) {
				conn.setRequestProperty(property, mapRequestProperties.get(property));
			}
		}
		try (OutputStream os = conn.getOutputStream()) {
			os.write("".getBytes());
			os.flush();
		}
		try (InputStreamReader inputStreamReader = new InputStreamReader(conn.getInputStream());
				BufferedReader br = new BufferedReader(inputStreamReader)) {
			responsePlainText = br.readLine();

			u = mapper.readValue(responsePlainText, uclazz);
		}
		conn.disconnect();
		return u;

	}

	/**
	 * @return the requestPlainText
	 */
	public String getRequestPlainText() {
		return requestPlainText;
	}

	/**
	 * @return the responsePlainText
	 */
	public String getResponsePlainText() {
		return responsePlainText;
	}

}
