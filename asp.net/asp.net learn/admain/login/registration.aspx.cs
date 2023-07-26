using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Data;
using System.Data.SqlClient;
using System.Data.Common;

public partial class login_registration : System.Web.UI.Page
{
    SqlConnection con;
    SqlCommand cmd;
    DataAdapter da;
    SqlDataAdapter ds;


    void myReg() {
        con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|Datadirectory|product_data.mdf;Integrated Security=True");
        con.Open();
    }


    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void btn_Click(object sender, EventArgs e)
    {


        if ((FileUpload1.PostedFile != null) && (FileUpload1.PostedFile.ContentLength > 0)) { 
            string fn = Path.GetFileName(FileUpload1.PostedFile.FileName);
            string SaveLocation = Server.MapPath("../Image/")+fn;
            FileUpload1.PostedFile.SaveAs(SaveLocation);
            Image1.ImageUrl = "../Image/" + fn;
            Response.Write("<script>alert('successfully upload');</script>");
        }

    }

    protected void FileUpload1_Load(object sender, EventArgs e)
    {
    }
}