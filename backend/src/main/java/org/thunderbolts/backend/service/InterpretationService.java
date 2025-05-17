package org.thunderbolts.backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thunderbolts.backend.model.Interpretation;
import org.thunderbolts.backend.repository.InterpretationRepository;

import java.util.List;

@Service
public class InterpretationService {

    @Autowired
    private InterpretationRepository interpretationRepository;

    public List<Interpretation> findByQuoteId(long quoteId) {
        return interpretationRepository.findByQuoteId(quoteId);
    }
}
