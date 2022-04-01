## My self-study notes

### About REST

"REpresentational State Transfer (REST) is a set of principles that, when combined, describe how common standards, HTTP usually, can be used to define a remote system interface in a client-server system. Although REST can work over other protocols, in practice it is rarely used with anything but HTTP. REST is a programming and operating system-neutral architecture. It really is just a set of best practices, or patterns, and it’s not even all that rigid! But what it allows you to do is to create a web-based API in a de facto, standard way."

Only nouns go into the URL because nouns describe things or states of things. The verbs, the action to perform on the specified resource, are determined by the HTTP method.

With a RESTful interface, the most common HTTP methods, namely, GET, POST,
PUT, and DELETE, are given specific meanings:
• GET – Retrieve a resource (or resources). GET is the only method
considered “safe,” meaning it doesn’t result in a data change on the
server.
• POST – Create a new resource (unsafe).
• PUT – Update an existing resource (unsafe).
• DELETE – Delete an existing resource (unsafe).

However, JSON is by far the most common state representation
format. The reason for this is most likely that producing and consuming JSON in
JavaScript in a browser is trivial, and this is what most RESTful APIs are accessed from.
JSON is inherently a simple data format that, even if you had to write code to produce
it by hand, is extremely easy to do (usually no more complicated than calling JSON.
stringify(x) for object x, and similarly, JSON.parse(x) where x is some JSON, to get
an actual object). It’s simpler than XML, and it doesn’t require a unique XML-based
language, such as SOAP (Simple Object Access Protocol, the format used for classic non-RESTful
web services).
