package org.thunderbolts.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.thunderbolts.backend.model.Quote;

public interface QuoteRepository extends JpaRepository<Quote, Long> {
}
