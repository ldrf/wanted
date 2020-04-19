package ar.com.wanted.wantedapi.issues.service;

import java.util.List;

import org.springframework.stereotype.Service;

import ar.com.wanted.wantedapi.factory.ToolParserFactory;
import ar.com.wanted.wantedapi.issues.dto.IssueCountByStatusDTO;
import ar.com.wanted.wantedapi.issues.dto.IssuesDTO;
import ar.com.wanted.wantedapi.toolparsers.ToolParser;

@Service
public class IssuesService {

	public IssuesDTO listIssuesByProject(String projectName, String mail) throws Exception{
		String user = "";
		String status = "";
		ToolParser toolParser = ToolParserFactory.get("Redmine");
		IssuesDTO issuesDTO  = toolParser.findIssuesByProjectUserStatus(projectName, user, status);
		
		 
		 return issuesDTO;
	}
	
	public List<IssueCountByStatusDTO> groupIssuesByStatus(String projectName) throws Exception{
		String user = "";
		String status = "";
		ToolParser toolParser = ToolParserFactory.get("Redmine");
		 return toolParser.groupIssuesByStatus(projectName, user, status);
	}


	
}
