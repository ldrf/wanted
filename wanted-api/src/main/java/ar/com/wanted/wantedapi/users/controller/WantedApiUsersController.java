package ar.com.wanted.wantedapi.users.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ar.com.wanted.wantedapi.users.dto.UserLoginDTO;

@RestController
public class WantedApiUsersController {

	@RequestMapping(value = "/users/validate-mail-password", method = RequestMethod.GET)
	public UserLoginDTO listIssuesByProject(@RequestParam(name = "mail") String mail,
			@RequestParam(name = "password") String password) throws Exception {
		UserLoginDTO userLoginDTO = null;
		if (mail == null || "".contentEquals(mail.trim())) {
			throw new Exception("Mail is mandatory.");
		}
		if (password == null || "".contentEquals(password.trim())) {
			throw new Exception("Password is mandatory.");
		}

		if ("admin@cpqi.com".equals(mail) && "1234".equals(password)) {
			userLoginDTO = new UserLoginDTO();
			userLoginDTO.setMail("admin@cpqi.com");
			userLoginDTO.setPassword("1234");
		}
		

		return userLoginDTO;

	}
}
