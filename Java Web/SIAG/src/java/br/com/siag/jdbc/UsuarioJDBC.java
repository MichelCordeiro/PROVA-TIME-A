package br.com.siag.jdbc;

import br.com.siag.beans.UsuarioBean;
import br.com.siag.dao.UsuarioDAO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author marcus
 */
public class UsuarioJDBC implements UsuarioDAO{

    private final Connection conexao;
    
    public UsuarioJDBC(Connection conexao){
        this.conexao = conexao;
    }
    /**
     * 
     * @param cpf
     * @return Retorna usuário com base no CPF
     */
    @Override
    public UsuarioBean carregarUser(String cpf) {
        PreparedStatement pst;
        String sql = "SELECT * FROM tbl_aluno WHERE cpf_aluno='"+cpf+"' AND status='ATIVO'";
        ResultSet rs;
        UsuarioBean user = null;
        
        try{
            pst = conexao.prepareStatement(sql);
            rs = pst.executeQuery();
            
            if(rs.next()){
                user = new UsuarioBean();
                user.setId_user(rs.getInt("codigo"));
                user.setCpf_user(rs.getString("cpf_aluno"));
                user.setNome_user(rs.getString("nome_aluno"));
                user.setEmail_user(rs.getString("email_aluno"));
                user.setTel_user(rs.getString("tel_aluno"));
            }
            pst.close();
            rs.close();
        }catch(SQLException ex){
            System.out.println("ERRO AO CARREGAR ALUNO --- ERRO || "+ex);
        }        
        return user;
    }   
}
