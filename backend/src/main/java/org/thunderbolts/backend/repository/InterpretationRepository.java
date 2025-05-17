package org.thunderbolts.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.thunderbolts.backend.model.Interpretation;
import org.thunderbolts.backend.model.Quote;

import java.util.List;

public interface InterpretationRepository extends JpaRepository<Interpretation, Long> {
    List<Interpretation> findByQuoteId(long quoteId);
}
