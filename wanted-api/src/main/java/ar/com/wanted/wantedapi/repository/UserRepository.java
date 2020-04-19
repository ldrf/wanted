package ar.com.wanted.wantedapi.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ar.com.wanted.wantedapi.login.dto.LoginDTO;
import ar.com.wanted.wantedapi.model.User;
import ar.com.wanted.wantedapi.users.dto.UserByProjectDTO;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	@Query("SELECT new ar.com.wanted.wantedapi.login.dto.LoginDTO(U) FROM User U where U.mail = :mail AND U.password = :password and U.active = 1")
	public Optional<LoginDTO>  findActiveUserByMailPassword(String mail , String password);

	@Query("SELECT new ar.com.wanted.wantedapi.users.dto.UserByProjectDTO(UP.user) FROM UserProject UP where UP.project.name = :projectName")
	public List<UserByProjectDTO> findUsersByProjectName(String projectName);

}
