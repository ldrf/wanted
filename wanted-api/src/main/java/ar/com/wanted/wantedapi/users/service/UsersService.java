package ar.com.wanted.wantedapi.users.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.com.wanted.wantedapi.repository.ProjectRepository;
import ar.com.wanted.wantedapi.users.dto.CustomerDataDTO;

@Service
public class UsersService {

	@Autowired
	private ProjectRepository projectRepository;
	
	public CustomerDataDTO findUsersByProjectName(String projectName) {
		CustomerDataDTO customerData = projectRepository.findCustomerProjectUsersByProjectName(projectName);
		return customerData;
	}

	public void passwordRecovery(String mail) {

		
		// TODO Auto-generated method stub
		
	}

}
