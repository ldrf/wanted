package ar.com.wanted.wantedapi.toolparsers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import ar.com.wanted.wantedapi.issues.dto.IssueCountByStatusDTO;
import ar.com.wanted.wantedapi.issues.dto.IssueDTO;
import ar.com.wanted.wantedapi.issues.dto.IssuesDTO;
import ar.com.wanted.wantedapi.issues.redmine.dto.Issues;
import ar.com.wanted.wantedapi.issues.redmine.dto.RedmineIssuesDTO;

public class RedmineToolParser implements ToolParser{

	@Override
	public IssuesDTO findIssuesByProjectUserStatus(String project, String user, String status) throws Exception {
		ResponseEntity<RedmineIssuesDTO> objeto = findIssues(project, user, status);
		IssuesDTO issuesDTO = new IssuesDTO();
		if(objeto != null && objeto.getStatusCodeValue() == 200) {
			RedmineIssuesDTO redmineIssuesDTO = objeto.getBody();
			if(redmineIssuesDTO != null && redmineIssuesDTO.getIssues() != null) {
				redmineIssuesDTO.getIssues().forEach(issue -> createIssueDTO(issue, issuesDTO));
			}
			
		}
		
		
		return issuesDTO;
	}
	
	@Override
	public List<IssueCountByStatusDTO> groupIssuesByStatus(String project, String user, String status) throws Exception {
		List<IssueCountByStatusDTO> issueCountByStatus = new ArrayList<>(); 
		if(status == null || "".equals(status.trim())) {
			List<String> listStatus = Arrays.asList("closed", "open");
			listStatus.forEach( currentStatus -> {
				findIssuesBySpecificStatus(project, user, currentStatus, issueCountByStatus);
			});
			
		}else {
			findIssuesBySpecificStatus(project, user, status.toLowerCase(), issueCountByStatus);
		}
		
		return issueCountByStatus;
	}
	
	public void findIssuesBySpecificStatus(String project, String user, String status, List<IssueCountByStatusDTO> issueCountByStatus){
		
		ResponseEntity<RedmineIssuesDTO> objeto = findIssues(project, user, status );

		if(objeto != null && objeto.getStatusCodeValue() == 200) {
			RedmineIssuesDTO redmineIssuesDTO = objeto.getBody();
			if(redmineIssuesDTO != null && redmineIssuesDTO.getIssues() != null) {
				IssueCountByStatusDTO currentIssueByStatus = new IssueCountByStatusDTO();
				currentIssueByStatus.setCount(redmineIssuesDTO.getTotalCount());
				currentIssueByStatus.setStatus(status);
				issueCountByStatus.add(currentIssueByStatus);
			}
		}
		
	}

	private void createIssueDTO(Issues issue, IssuesDTO issuesDTO) {
		
		IssueDTO issue1 = new IssueDTO();
		issue1.setId(issue.getId());
		issue1.setStatus(issue.getStatus().getName());
		issue1.setAuthor(issue.getAuthor().getName());
		issue1.setSubject(issue.getSubject());
		issuesDTO.getIssues().add(issue1);
	}
	
	public ResponseEntity<RedmineIssuesDTO> findIssues(String project, String user, String status){
		RestTemplate restTemplate = new RestTemplate();
		String fooResourceUrl = "http://redmine.cpqi.com/projects/";
		if(project!= null && !"".equals(project)) {
			fooResourceUrl +=project+"/issues.json";
		}else {
			fooResourceUrl += "bgba-rtb/issues.json";
			
		}
		
		if(status!= null && !"".equals(status)) {
			fooResourceUrl += "?status_id="+status;
		}else {
			fooResourceUrl += "?status_id=*";
		}
		
		MultiValueMap<String, String> mvm = new HttpHeaders();
		mvm.add("Authorization", "Basic Nzk0YjZiOTE0MjQwMTExZTZmZWQwZGJlMmEyMGUxYWFiZTE3ZjIyMDo=");
		ResponseEntity<RedmineIssuesDTO> objeto = restTemplate.exchange
		 (fooResourceUrl, HttpMethod.GET, new HttpEntity<RedmineIssuesDTO>(mvm), RedmineIssuesDTO.class);
		
		return objeto;
	}
	

}
