package ar.com.wanted.wantedapi.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name="USER_PROJECT")
public class UserProject {
	
	@EmbeddedId
	private UserProjectKey id;
 
    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    private User user;
 
    @ManyToOne
    @MapsId("project_id")
    @JoinColumn(name = "project_id")
    private Project project;
 
    @Column(name="USERNAME_TOOL")
    private String userNameTool;

	public UserProjectKey getId() {
		return id;
	}

	public void setId(UserProjectKey id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public String getUserNameTool() {
		return userNameTool;
	}

	public void setUserNameTool(String userNameTool) {
		this.userNameTool = userNameTool;
	}
    
    
}
