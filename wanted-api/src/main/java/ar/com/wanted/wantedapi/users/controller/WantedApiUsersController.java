package ar.com.wanted.wantedapi.users.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ar.com.wanted.wantedapi.users.dto.CustomerDataDTO;
import ar.com.wanted.wantedapi.users.service.UsersService;

@RestController
public class WantedApiUsersController {

	@Autowired
	private UsersService service;
	
	@RequestMapping(value = "/users/get-users-by-project", method = RequestMethod.GET)
	public CustomerDataDTO listIssuesByProject(@RequestParam(name = "projectName") String projectName) throws Exception {
		if (projectName == null || "".contentEquals(projectName.trim())) {
			throw new Exception("projectName is mandatory.");
		}

		CustomerDataDTO customerData = service.findUsersByProjectName(projectName);
		return customerData;

	}
}
