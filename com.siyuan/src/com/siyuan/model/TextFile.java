package com.siyuan.model;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class TextFile {

	public String getText() throws IOException {
		InputStream inputstream = new FileInputStream("c:/xye/jsonfile.txt");
		InputStreamReader reader = new InputStreamReader(inputstream);
		BufferedReader br = new BufferedReader(reader);
		String string = "";
		String line;
		while ((line = br.readLine()) != null) {
			string += line + "\n";
		}
		br.close();
		return string;
	}

}
