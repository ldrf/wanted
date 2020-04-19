package ar.com.wanted.wantedapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ar.com.wanted.wantedapi.model.Project;
import ar.com.wanted.wantedapi.users.dto.CustomerDataDTO;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

	@Query("SELECT new ar.com.wanted.wantedapi.users.dto.CustomerDataDTO(P) FROM Project P where P.name = :projectName")
	public CustomerDataDTO findCustomerProjectUsersByProjectName(String projectName);
	
	
	@Query("SELECT UP.project.name FROM UserProject UP where UP.user.mail = :user")
	public List<String> findProjectNamesByUserMail(String user);
}
