package Test;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/que1")
public class Search extends HttpServlet {
	@Override
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	String question=req.getParameter("que");
	
	Connection con;
	PreparedStatement pt;
	ResultSet rs;
	
	
	
	String query="SELECT Question_an  FROM question WHERE Question=question";
	
	try {
		con=DriverManager.getConnection("jdbc:mysql://localhost:3306/product","root","vijay@123");
		pt=con.prepareStatement(query);
		
		pt.setString(1, question);
		ResultSet c=pt.executeQuery();
		
		PrintWriter pw=resp.getWriter();
		if(query.equals(question)) {
			pw.print("Search Question"+c+"");
			
		}else {
			pw.print("<a href='www.goggle.com'>");
		}
		
		
		
		
		
	
		
		
		
		
		
		
		

		
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
		
		
	}

}
