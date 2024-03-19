package server.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import server.enitiy.Admindata;

public interface AdminRepo extends JpaRepository<Admindata, Long> {

}
