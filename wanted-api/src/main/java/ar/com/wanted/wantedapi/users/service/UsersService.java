package ar.com.wanted.wantedapi.users.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.com.wanted.wantedapi.model.User;
import ar.com.wanted.wantedapi.repository.ProjectRepository;
import ar.com.wanted.wantedapi.repository.UserRepository;
import ar.com.wanted.wantedapi.users.dto.CustomerDataDTO;
import ar.com.wanted.wantedapi.users.dto.UserSaveDTO;

@Service
public class UsersService {
	

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private UserRepository userReposotory;

	
	public CustomerDataDTO findUsersByProjectName(String projectName) {
		CustomerDataDTO customerData = projectRepository.findCustomerProjectUsersByProjectName(projectName);
		return customerData;
	}

	public User save(UserSaveDTO userSaveDTO) {
		User userToSave = new User();
		userToSave.setMail(userSaveDTO.getMail());
		userToSave.setPassword(userSaveDTO.getPassword());
		userToSave.setActive(true);
		userToSave.setName(userSaveDTO.getName());
		User savedUser = userReposotory.save(userToSave);
		return savedUser;
	}

	

}
