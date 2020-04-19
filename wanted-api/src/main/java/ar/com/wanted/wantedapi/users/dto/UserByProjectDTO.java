package ar.com.wanted.wantedapi.users.dto;

import ar.com.wanted.wantedapi.model.User;

public class UserByProjectDTO {
	
	private String name;
	private String mail;
	

	
	public UserByProjectDTO(User user) {
		this.name = user.getName();
		this.mail = user.getMail();
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getMail() {
		return mail;
	}



	public void setMail(String mail) {
		this.mail = mail;
	}
}
