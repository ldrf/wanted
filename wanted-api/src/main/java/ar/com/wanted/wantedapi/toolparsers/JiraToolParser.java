package ar.com.wanted.wantedapi.toolparsers;

import java.util.List;

import ar.com.wanted.wantedapi.issues.dto.IssueCountByStatusDTO;
import ar.com.wanted.wantedapi.issues.dto.IssuesDTO;

public class JiraToolParser implements ToolParser{

	@Override
	public IssuesDTO findIssuesByProjectUserStatus(String project, String user, String status) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public  List<IssueCountByStatusDTO> groupIssuesByStatus(String project, String user, String status) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
