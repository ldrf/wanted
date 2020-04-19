package ar.com.wanted.wantedapi.model;


import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "PROJECTS")
public class Project {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	@Column(name = "ID")
	private long id;
	
	@Column(name = "NAME")
	private String name;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="customer_id")
	private Customer customer;
	
	@OneToMany(mappedBy = "project")
    private Set<UserProject> userProjects;
	
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
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public Set<UserProject> getUserProjects() {
		return userProjects;
	}
	public void setUserProjects(Set<UserProject> userProjects) {
		this.userProjects = userProjects;
	}
	
	
}
