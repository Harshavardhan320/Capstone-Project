package server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import server.enitiy.Admindata;
import server.enitiy.User;
import server.repo.AdminRepo;
import server.repo.UserRepo;

@Service
public class ServiceClass {
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private AdminRepo adminRepo;

	public List<User> getUsers() {
		List<User> user = userRepo.findAll();
		return user;
	}

	public List<Admindata> getadmindata() {
		List<Admindata> data = adminRepo.findAll();
		return data;
	}

	public User saveuser(User user) {
		
		return null;
	}

}
