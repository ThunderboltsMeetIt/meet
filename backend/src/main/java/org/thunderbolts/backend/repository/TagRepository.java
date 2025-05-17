package org.thunderbolts.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.thunderbolts.backend.model.Quote;
import org.thunderbolts.backend.model.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
