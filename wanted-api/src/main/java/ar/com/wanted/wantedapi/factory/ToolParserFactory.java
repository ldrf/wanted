package ar.com.wanted.wantedapi.factory;

import ar.com.wanted.wantedapi.toolparsers.JiraToolParser;
import ar.com.wanted.wantedapi.toolparsers.RedmineToolParser;
import ar.com.wanted.wantedapi.toolparsers.ToolParser;

public class ToolParserFactory {

	private ToolParserFactory() {
	}

	public static ToolParser get(String toolType) throws Exception {
		switch (toolType.toUpperCase()) {
		case "JIRA": {
			return new JiraToolParser();
		}
		case "REDMINE": {
			return new RedmineToolParser();
		}
		default: {
			throw new Exception("It was not possible create a parse to the tool " + toolType);
		}
		}
	}

}
