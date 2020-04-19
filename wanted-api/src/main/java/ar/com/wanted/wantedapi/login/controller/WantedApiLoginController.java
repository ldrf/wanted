package ar.com.wanted.wantedapi.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ar.com.wanted.wantedapi.login.dto.LoginDTO;
import ar.com.wanted.wantedapi.login.service.LoginService;

@RestController
public class WantedApiLoginController {

	@Autowired
	private LoginService service;
	
	@RequestMapping(value = "/login/validate-mail-password", method = RequestMethod.GET)
	public LoginDTO listIssuesByProject(@RequestParam(name = "mail") String mail,
			@RequestParam(name = "password") String password) throws Exception {
		if (mail == null || "".contentEquals(mail.trim())) {
			throw new Exception("Mail is mandatory.");
		}
		if (password == null || "".contentEquals(password.trim())) {
			throw new Exception("Password is mandatory.");
		}

		LoginDTO userLoginDTO = service.findUserByMailPassword(mail, password);
		
		return userLoginDTO;

	}
}
