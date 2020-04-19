package ar.com.wanted.wantedapi.model;

public class Tool {
	
	private long id;
	private long idProject;
	private String tool;
	private String projectName;
	private String url;
	private String token;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getIdProject() {
		return idProject;
	}
	public void setIdProject(long idProject) {
		this.idProject = idProject;
	}
	public String getTool() {
		return tool;
	}
	public void setTool(String tool) {
		this.tool = tool;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
	

}
