package server.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import server.enitiy.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
