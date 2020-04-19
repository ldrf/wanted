package ar.com.wanted.wantedapi.projects.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.com.wanted.wantedapi.repository.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository repository;
	
	public List<String> findProjectNamesByUserMail(String user){
		return repository.findProjectNamesByUserMail(user);
		
	}
}
