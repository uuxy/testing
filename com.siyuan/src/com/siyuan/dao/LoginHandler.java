package com.siyuan.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.siyuan.model.UserObj;

public class LoginHandler {

	public ArrayList<UserObj> getAllUsers(Connection connection)
			throws Exception {
		ArrayList<UserObj> userList = new ArrayList<UserObj>();
		try {
			// String uname = request.getParameter("uname");
			PreparedStatement preparedStmt = connection
					.prepareStatement("SELECT username, password FROM user");
			// ps.setString(1,uname);
			ResultSet rs = preparedStmt.executeQuery();
			while (rs.next()) {
				UserObj uservo = new UserObj();
				uservo.setUsername(rs.getString("username"));
				uservo.setPassword(rs.getString("password"));
				userList.add(uservo);
			}
			preparedStmt.close();
			rs.close();
			
			return userList;
		} catch (Exception e) {
			throw e;
		}
	}

}