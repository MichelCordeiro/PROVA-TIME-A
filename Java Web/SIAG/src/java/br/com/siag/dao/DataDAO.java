/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.siag.dao;

import br.com.siag.beans.DataBean;
import java.util.List;

/**
 *
 * @author marcus
 */
public interface DataDAO {
    /**
     * 
     * @param data
     * @return Lista de horários em dia específico
     */
    List<DataBean>  listarHorariosDisponiveis(String data);
    
    /**
     * 
     * @param d
     * @return Altera status do dia selecionado
     */
    boolean         alterarStatus(int d);
    
    /**
     * 
     * @param id
     * @return Data específica a partir do ID
     */
    DataBean        carregarDataEspecifica(int id);
}