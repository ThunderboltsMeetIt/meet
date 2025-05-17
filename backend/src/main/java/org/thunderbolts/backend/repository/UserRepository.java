package org.thunderbolts.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.thunderbolts.backend.model.Tag;
import org.thunderbolts.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
