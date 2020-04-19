package ar.com.wanted.wantedapi.issues.dto;

import java.util.ArrayList;
import java.util.List;

public class IssuesDTO {
	private List<IssueDTO> issues = new ArrayList<IssueDTO>();

	public List<IssueDTO> getIssues() {
		return issues;
	}

	public void setIssues(List<IssueDTO> issues) {
		this.issues = issues;
	}
	
	

}
