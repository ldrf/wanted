package ar.com.wanted.wantedapi.toolparsers;

import java.util.List;

import ar.com.wanted.wantedapi.issues.dto.IssueCountByStatusDTO;
import ar.com.wanted.wantedapi.issues.dto.IssuesDTO;

public interface ToolParser {

	public IssuesDTO findIssuesByProjectUserStatus(String project, String user, String status) throws Exception;

	public  List<IssueCountByStatusDTO> groupIssuesByStatus(String project, String user, String status) throws Exception;

}
