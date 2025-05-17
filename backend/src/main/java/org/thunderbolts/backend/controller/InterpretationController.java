package org.thunderbolts.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.thunderbolts.backend.model.Interpretation;
import org.thunderbolts.backend.service.InterpretationService;

import java.util.List;


@RestController
@RequestMapping("/api/interpretations")
public class InterpretationController {

    @Autowired
    private InterpretationService interpretationService;

    @GetMapping("/quote/{quoteId}")
    public ResponseEntity<List<Interpretation>> getInterpretationsForQuote(@PathVariable long quoteId) {
        List<Interpretation> interpretations = interpretationService.findByQuoteId(quoteId);
        return interpretations.isEmpty()
                ? ResponseEntity.noContent().build()
                : ResponseEntity.ok(interpretations);
    }
}