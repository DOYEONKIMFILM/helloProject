package org.edu.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Controller {
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws IOException;
}
