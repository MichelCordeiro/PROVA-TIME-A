VERSION 5.00
Object = "{6B7E6392-850A-101B-AFC0-4210102A8DA7}#1.3#0"; "COMCTL32.OCX"
Begin VB.Form frmAteCadAluno 
   BorderStyle     =   3  'Fixed Dialog
   Caption         =   "SIAG"
   ClientHeight    =   4425
   ClientLeft      =   45
   ClientTop       =   375
   ClientWidth     =   8295
   LinkTopic       =   "Form1"
   MaxButton       =   0   'False
   MDIChild        =   -1  'True
   MinButton       =   0   'False
   PaletteMode     =   1  'UseZOrder
   ScaleHeight     =   4425
   ScaleWidth      =   8295
   ShowInTaskbar   =   0   'False
   Begin ComctlLib.Toolbar tooAteCadAluIcone 
      Align           =   1  'Align Top
      Height          =   630
      Left            =   0
      TabIndex        =   9
      Top             =   0
      Width           =   8295
      _ExtentX        =   14631
      _ExtentY        =   1111
      ButtonWidth     =   1032
      ButtonHeight    =   1005
      ImageList       =   "ImageList1"
      _Version        =   327682
      BeginProperty Buttons {0713E452-850A-101B-AFC0-4210102A8DA7} 
         NumButtons      =   4
         BeginProperty Button1 {0713F354-850A-101B-AFC0-4210102A8DA7} 
            Key             =   "NOVO"
            Object.Tag             =   "Novo"
            ImageIndex      =   1
         EndProperty
         BeginProperty Button2 {0713F354-850A-101B-AFC0-4210102A8DA7} 
            Key             =   "ABRIR"
            Object.Tag             =   "Abrir"
            ImageIndex      =   2
         EndProperty
         BeginProperty Button3 {0713F354-850A-101B-AFC0-4210102A8DA7} 
            Key             =   "SALVAR"
            Object.Tag             =   "Salvar"
            ImageIndex      =   3
         EndProperty
         BeginProperty Button4 {0713F354-850A-101B-AFC0-4210102A8DA7} 
            Key             =   "SAIR"
            Object.Tag             =   "Sair"
            ImageIndex      =   4
         EndProperty
      EndProperty
   End
   Begin VB.Frame fraAteCadAluno 
      Caption         =   "Cadastro de Aluno"
      ForeColor       =   &H00000000&
      Height          =   3615
      Left            =   120
      TabIndex        =   0
      Top             =   720
      Width           =   8055
      Begin VB.TextBox txtAteCadAluEmail 
         Height          =   375
         Left            =   1320
         TabIndex        =   8
         Tag             =   "OBRIGATORIO"
         Top             =   2640
         Width           =   4215
      End
      Begin VB.TextBox txtAteCadAluTelefone 
         Height          =   405
         Left            =   1320
         TabIndex        =   7
         Tag             =   "OBRIGATORIO"
         Top             =   1920
         Width           =   2415
      End
      Begin VB.TextBox txtAteCadAluCPF 
         Height          =   405
         Left            =   1320
         TabIndex        =   6
         Tag             =   "OBRIGATORIO"
         Top             =   1200
         Width           =   2655
      End
      Begin VB.TextBox txtAteCadAluNome 
         Height          =   375
         Left            =   1320
         TabIndex        =   5
         Tag             =   "OBRIGATORIO"
         Top             =   480
         Width           =   5055
      End
      Begin ComctlLib.ImageList ImageList1 
         Left            =   7320
         Top             =   2880
         _ExtentX        =   1005
         _ExtentY        =   1005
         BackColor       =   -2147483643
         ImageWidth      =   32
         ImageHeight     =   32
         MaskColor       =   12632256
         _Version        =   327682
         BeginProperty Images {0713E8C2-850A-101B-AFC0-4210102A8DA7} 
            NumListImages   =   4
            BeginProperty ListImage1 {0713E8C3-850A-101B-AFC0-4210102A8DA7} 
               Picture         =   "frmAteCadAluno.frx":0000
               Key             =   ""
            EndProperty
            BeginProperty ListImage2 {0713E8C3-850A-101B-AFC0-4210102A8DA7} 
               Picture         =   "frmAteCadAluno.frx":11F582
               Key             =   ""
            EndProperty
            BeginProperty ListImage3 {0713E8C3-850A-101B-AFC0-4210102A8DA7} 
               Picture         =   "frmAteCadAluno.frx":1447F8
               Key             =   ""
            EndProperty
            BeginProperty ListImage4 {0713E8C3-850A-101B-AFC0-4210102A8DA7} 
               Picture         =   "frmAteCadAluno.frx":263D7A
               Key             =   ""
            EndProperty
         EndProperty
      End
      Begin VB.Label lblemail 
         Caption         =   "E-mail"
         ForeColor       =   &H000000FF&
         Height          =   255
         Left            =   360
         TabIndex        =   4
         Top             =   2760
         Width           =   495
      End
      Begin VB.Label lbltelefone 
         Caption         =   "Telefone"
         ForeColor       =   &H000000FF&
         Height          =   375
         Left            =   360
         TabIndex        =   3
         Top             =   2040
         Width           =   735
      End
      Begin VB.Label lblpf 
         Caption         =   "CPF"
         ForeColor       =   &H000000FF&
         Height          =   255
         Left            =   360
         TabIndex        =   2
         Top             =   1320
         Width           =   495
      End
      Begin VB.Label lblnome 
         Caption         =   "Nome"
         ForeColor       =   &H000000FF&
         Height          =   375
         Left            =   360
         TabIndex        =   1
         Top             =   600
         Width           =   735
      End
   End
End
Attribute VB_Name = "frmAteCadAluno"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
 Option Explicit

Private Sub novo()
    Call PG_LimpaForm(Me, txtAteCadAluNome)
End Sub


Private Sub tooAteCadAluIcone_ButtonClick(ByVal Button As ComctlLib.Button)
Select Case Button.Key
        Case "NOVO"
            novo
        Case "ABRIR"
            'Abrir arquivo
        Case "SALVAR"
        
            Dim adosisagenda As ADODB.Recordset
            Dim sql As String
            
            sql = "insert into tbl_aluno (cpf_aluno, nome_aluno, tel_aluno, email_aluno) values (" _
            & "'" & txtAteCadAluCPF.Text & "'," _
            & "'" & txtAteCadAluNome.Text & "'," _
            & "'" & txtAteCadAluTelefone.Text & "'," _
            & "'" & txtAteCadAluEmail.Text & "')"
            
            Set adosisagenda = abrirconexao("DRIVER={MySQL ODBC 3.51 Driver};SERVER=localhost;DATABASE=sisagenda;UID=root;PWD=123456; OPTION=3").Execute(sql)
            
                      
            MsgBox "Cadastro Conclu�do ! GRA�AS A DEUS", vbInformation + vbOKOnly, App.Title

        Case "SAIR"
            Unload frmAteCadAluno
    End Select
End Sub

Private Sub txtAteCadAluCPF_KeyPress(KeyAscii As Integer)
    KeyAscii = FG_BloqueiaTeclado(CG_BLOQUEIATECLADO_SOMENTENUMEROS, KeyAscii)
End Sub

Private Sub txtAteCadAluTelefone_KeyPress(KeyAscii As Integer)
    KeyAscii = FG_BloqueiaTeclado(CG_BLOQUEIATECLADO_SOMENTENUMEROS, KeyAscii)
End Sub

Private Sub Salvar()
    If FG_ValidaForm(Me) Then
    End If
End Sub
