package ar.com.wanted.wantedapi.users.dto;

import java.util.ArrayList;
import java.util.List;

import ar.com.wanted.wantedapi.model.Project;

public class CustomerDataDTO {
	private String customer;
	private String project;
	private List<UserByProjectDTO> users ;
	
	public CustomerDataDTO(Project project) {
		this.customer = project.getCustomer().getName();
		this.project = project.getName();
		if(project.getUserProjects() != null) {
			project.getUserProjects().forEach(userProject -> getUsers().add(new UserByProjectDTO(userProject.getUser())));
		}
	}
	public String getCustomer() {
		return customer;
	}
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public List<UserByProjectDTO> getUsers() {
		if(users == null) {
			users = new ArrayList<>();
		}
		return users;
	}
	public void setUsers(List<UserByProjectDTO> users) {
		this.users = users;
	}

}
