/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package siag.desktop;

import br.com.siag.swing.frmLogin;
import br.com.siag.swing.gerencial.FrmPrincipalGer;
import javax.swing.JOptionPane;

/**
 *
 * @author marcus
 */
public class SIAGDesktop {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        try{
        frmLogin principal = new frmLogin();
        principal.setVisible(true);
        }catch(UnsupportedClassVersionError ex){
            JOptionPane.showMessageDialog(null, "Por favor, instale uma versão atual do Java !");
        }
    }
    
}
