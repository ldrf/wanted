package ar.com.wanted.wantedapi.login.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.com.wanted.wantedapi.login.dto.LoginDTO;
import ar.com.wanted.wantedapi.repository.UserRepository;

@Service
public class LoginService {
	
	@Autowired
	private UserRepository userRepository;
	

	public LoginDTO findUserByMailPassword(String mail, String password) throws Exception {
		Optional<LoginDTO> userOptional = userRepository.findActiveUserByMailPassword(mail, password);
		LoginDTO userLoginDTO = null;
		if (userOptional.isPresent()) {
			userLoginDTO = userOptional.get();
		}
		return userLoginDTO;
	}

}
