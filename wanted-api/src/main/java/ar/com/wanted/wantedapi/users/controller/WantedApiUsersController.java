package ar.com.wanted.wantedapi.users.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ar.com.wanted.wantedapi.model.User;
import ar.com.wanted.wantedapi.users.dto.CustomerDataDTO;
import ar.com.wanted.wantedapi.users.dto.UserSaveDTO;
import ar.com.wanted.wantedapi.users.service.UsersService;

@RestController
public class WantedApiUsersController {

	@Autowired
	private UsersService service;
	
	@RequestMapping(value = "/users/get-users-by-project", method = RequestMethod.GET)
	public CustomerDataDTO findUsersByProjectName(@RequestParam(name = "projectName") String projectName) throws Exception {
		if (projectName == null || "".contentEquals(projectName.trim())) {
			throw new Exception("projectName is mandatory.");
		}
		CustomerDataDTO customerData = service.findUsersByProjectName(projectName);
		return customerData;

	}
	
	@RequestMapping(value = "/users/save-user", method = RequestMethod.POST)
	public String save(@RequestBody UserSaveDTO userSaveDTO) throws Exception {
		if(userSaveDTO == null) {
			throw new Exception("Invalid data.");
		}
		if(userSaveDTO.getName() == null || "".equalsIgnoreCase(userSaveDTO.getName())) {
			throw new Exception("Name is mandatory.");
		}
		if(userSaveDTO.getMail() == null || "".equalsIgnoreCase(userSaveDTO.getMail())) {
			throw new Exception("Mail is mandatory.");
		}
		if(userSaveDTO.getPassword() == null || "".equalsIgnoreCase(userSaveDTO.getPassword())) {
			throw new Exception("Password is mandatory.");
		}
		User userSaved = service.save(userSaveDTO);
		return userSaved.getName();

	}
	
	
	
}
