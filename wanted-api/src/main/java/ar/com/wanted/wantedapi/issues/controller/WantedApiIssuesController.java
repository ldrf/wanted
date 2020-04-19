package ar.com.wanted.wantedapi.issues.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ar.com.wanted.wantedapi.issues.dto.IssueCountByStatusDTO;
import ar.com.wanted.wantedapi.issues.dto.IssuesDTO;
import ar.com.wanted.wantedapi.issues.service.IssuesService;

@RestController
public class WantedApiIssuesController {

	@Autowired
	private IssuesService service;

	@RequestMapping(value = "/issues/list-issues-by-project", method = RequestMethod.GET)
	public IssuesDTO listIssuesByProject(@RequestParam(name = "projectName") String projectName,
			@RequestParam(name = "mail") String mail) {

		IssuesDTO issuesDTO = null;
		try {
			issuesDTO = service.listIssuesByProject(projectName, mail);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return issuesDTO;

	}

	@RequestMapping(value = "/issues/find-issues-count-by-project-grouped-by-status", method = RequestMethod.GET)
	public List<IssueCountByStatusDTO> findIssuesCountByProjectStatus(
			@RequestParam(name = "projectName") String projectName) {

		List<IssueCountByStatusDTO> issuesDTO = null;
		try {
			issuesDTO = service.groupIssuesByStatus(projectName);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return issuesDTO;

	}
}
