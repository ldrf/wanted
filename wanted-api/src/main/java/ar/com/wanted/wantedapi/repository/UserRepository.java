package ar.com.wanted.wantedapi.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ar.com.wanted.wantedapi.login.dto.LoginDTO;
import ar.com.wanted.wantedapi.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	@Query("SELECT new ar.com.wanted.wantedapi.login.dto.LoginDTO(U) FROM User U where U.mail = :mail AND U.password = :password and U.active = 1")
	public Optional<LoginDTO>  findActiveUserByMailPassword(@Param("mail") String mail , @Param("password") String password);

}
