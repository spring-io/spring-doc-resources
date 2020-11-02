FROM ubuntu:focal-20201008

RUN apt-get update
RUN apt-get install --no-install-recommends -y ca-certificates net-tools git curl jq python build-essential
RUN rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME /opt/openjdk
ENV PATH $JAVA_HOME/bin:$PATH
RUN mkdir -p /opt/openjdk && \
    cd /opt/openjdk && \
    curl -L https://github.com/AdoptOpenJDK/openjdk8-binaries/releases/download/jdk8u272-b10/OpenJDK8U-jdk_x64_linux_hotspot_8u272b10.tar.gz | tar xz --strip-components=2

ADD https://raw.githubusercontent.com/spring-io/concourse-java-scripts/v0.0.3/concourse-java.sh /opt/