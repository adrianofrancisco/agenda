package br.com.agenda.Agenda.repository;

import br.com.agenda.Agenda.model.Pessoa;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PessoaRepository extends PagingAndSortingRepository<Pessoa, Integer> {

}
