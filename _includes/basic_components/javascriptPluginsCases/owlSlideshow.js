$("#{{ component.data.wrapperDiv.theme.id }}").owlCarousel({
                              {% for owlData in include.slideshowOwlData %}
                              	{{ owlData[0] }} : {{ owlData[1]}} {% unless forloop.last%},{% endunless%}
                              {% endfor %}
                           });