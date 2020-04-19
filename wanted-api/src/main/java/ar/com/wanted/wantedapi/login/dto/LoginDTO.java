package ar.com.wanted.wantedapi.login.dto;

import java.util.ArrayList;
import java.util.List;

import ar.com.wanted.wantedapi.model.User;


public class LoginDTO {
	
	private String mail;
	private String name;
	private String password;
	private List<String> projectList = new ArrayList<>();
	public LoginDTO(User user) {
		this.mail = user.getMail();
		this.name = user.getName();
		this.password = user.getPassword();
		if(user.getUserProjects() != null) {
			user.getUserProjects().forEach(userProjects -> projectList.add(userProjects.getProject().getName()));
		}
	}
	
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<String> getProjectList() {
		return projectList;
	}
	public void setProjectList(List<String> projectList) {
		this.projectList = projectList;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	

}
