package server.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import server.enitiy.Admindata;
import server.enitiy.User;
import server.service.ServiceClass;

@RestController
@CrossOrigin(origins = "*")
public class Control {

	
	@Autowired
	private ServiceClass serviceClass;
	
	@GetMapping("/users")
	public List<User> getUserdata() {
		
		return serviceClass.getUsers();
	}
	
	@GetMapping("/admin")
	public List<Admindata> getAdminData(){
		
		return serviceClass.getadmindata();
	}
	
	@PostMapping(value ="/userregister")
	public User register(@RequestBody User user) {
		return serviceClass.saveuser(user);
	}
}