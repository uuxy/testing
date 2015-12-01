package com.siyuan.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnection {

	public Connection getConnection() throws Exception {
		Connection connection = null;
		String URL = "jdbc:mysql://localhost:3306/javaweb";

		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			connection = DriverManager.getConnection(URL, "xyexye08",
					"Siyuan05");
			return connection;
		} catch (SQLException e) {
			throw e;
		} catch (Exception e) {
			throw e;
		}
	}

}