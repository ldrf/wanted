package ar.com.wanted.wantedapi.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="CUSTOMERS")
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	@Column(name = "ID")
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@OneToMany(mappedBy = "customer")
    private Set<Project> projects;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Set<Project> getProjects() {
		return projects;
	}
	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}
	
	


}
