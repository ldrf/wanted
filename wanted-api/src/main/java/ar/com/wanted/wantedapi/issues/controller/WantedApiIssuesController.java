package ar.com.wanted.wantedapi.issues.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ar.com.wanted.wantedapi.issues.dto.IssueDTO;
import ar.com.wanted.wantedapi.issues.dto.IssuesDTO;
@RestController
public class WantedApiIssuesController {
	 @RequestMapping(value = "/issues/list-issues-by-project", method = RequestMethod.GET)
	    public IssuesDTO listIssuesByProject(
	            @RequestParam(name = "projectName") String projectName) {
		 
		 System.out.println(projectName);
		 IssuesDTO issuesDTO = new  IssuesDTO();
		 IssueDTO issue1 = new IssueDTO();
		 issue1.setId(1l);
		 issue1.setStatus("Resolved");
		 issue1.setAuthor("Henrique Neto");
		 issue1.setSubject("Instalación MySQL en AWS");
		 IssueDTO issue2 = new IssueDTO();
		 issue2.setId(2l);
		 issue2.setStatus("Resolved");
		 issue2.setAuthor("Henrique Neto");
		 issue2.setSubject("Creación del Endpoint de Listar Issues.");
		 issuesDTO.getIssues().add(issue1);
		 issuesDTO.getIssues().add(issue2);
		 return issuesDTO;
		 
	 }
}
