package com.siyuan.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.siyuan.dao.DbConnection;

public class SecurityManager {

	public ArrayList<UserObj> getAllUsersList() throws Exception {
		
		DbConnection database = new DbConnection();
		Connection conn = null;
		
		ArrayList<UserObj> userList = null;
		try {
			//DbConnection database = new DbConnection();
			conn = database.getConnection();
			//LoginHandler loginHandler = new LoginHandler();
			//userList = loginHandler.getAllUsers(connection);
			userList = getAllUsers(conn);

		} catch (Exception e) {
			throw e;
		} finally{
			if (conn != null){
				conn.close();				
			}
			
		}
		
		return userList;
	}
	
	public ArrayList<UserObj> getAllUsers(Connection connection)
			throws Exception {
		ArrayList<UserObj> userList = new ArrayList<UserObj>();
		try {
			// String uname = request.getParameter("uname");
			PreparedStatement ps = connection
					.prepareStatement("SELECT username, password FROM user");
			// ps.setString(1,uname);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				UserObj uservo = new UserObj();
				uservo.setUsername(rs.getString("username"));
				uservo.setPassword(rs.getString("password"));
				userList.add(uservo);
			}
			return userList;
		} catch (Exception e) {
			throw e;
		}
	}

}