package ar.com.wanted.wantedapi.projects.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ar.com.wanted.wantedapi.projects.service.ProjectService;

@RestController
public class ProjectController {
	
	@Autowired
	private ProjectService service;
	@RequestMapping(value = "/projects/find-project-names-by-user-mail", method = RequestMethod.GET)
	public List<String> findProjectNamesByUserMail(@RequestParam(name = "mail") String user) throws Exception {
		if (user == null || "".contentEquals(user.trim())) {
			throw new Exception("mail is mandatory.");
		}

		List<String> projects = service.findProjectNamesByUserMail(user);
		return projects;

	}
}
