package ar.com.wanted.wantedapi.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class UserProjectKey implements Serializable {

	private static final long serialVersionUID = 8959432950478914681L;

	@Column(name = "project_id")
	private Long projectId;

	@Column(name = "user_id")
	private Long userId;

	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	
	

}
